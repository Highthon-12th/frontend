import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useReceivePresent, type IRecords } from "../api/useReceivePresent";
import PresentSvg from "@shared/img/present.svg";

type Rect = {
  left: number;
  top: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
  cx: number;
  cy: number;
};
type Point = { x: number; y: number };

function pointsToRoundedPath(points: Point[], radius = 36): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];
    const d1 = { x: curr.x - prev.x, y: curr.y - prev.y };
    const d2 = { x: next.x - curr.x, y: next.y - curr.y };
    const l1 = Math.hypot(d1.x, d1.y);
    const l2 = Math.hypot(d2.x, d2.y);
    if (l1 === 0 || l2 === 0) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }
    const r = Math.min(radius, l1 / 2, l2 / 2);
    const p1 = { x: curr.x - (d1.x / l1) * r, y: curr.y - (d1.y / l1) * r };
    const p2 = { x: curr.x + (d2.x / l2) * r, y: curr.y + (d2.y / l2) * r };
    d += ` L ${p1.x} ${p1.y} Q ${curr.x} ${curr.y} ${p2.x} ${p2.y}`;
  }
  d += ` L ${points[points.length - 1].x} ${points[points.length - 1].y}`;
  return d;
}

function buildConnectorPath(
  rects: Rect[],
  width: number,
  index: number,
): string {
  const cur = rects[index];
  const next = rects[index + 1];
  const isCurLeft = index % 2 === 0;

  const leftCard = isCurLeft ? cur : next;
  const rightCard = isCurLeft ? next : cur;
  const laneLeft = leftCard.left / 2;
  const laneRight = rightCard.right + (width - rightCard.right) / 2;

  if (index === 0) {
    return pointsToRoundedPath(
      [
        { x: cur.right, y: cur.cy },
        { x: laneRight - cur.cx + 40, y: cur.cy },
        { x: laneRight - cur.cx + 40, y: next.cy },
        { x: laneRight - cur.cx / 3, y: next.cy },
      ],
      60,
    );
  }

  const dropY = cur.bottom + (next.top - cur.bottom) * 0.3;

  if (!isCurLeft) {
    return pointsToRoundedPath(
      [
        { x: laneRight - cur.cx / 3, y: cur.bottom },
        { x: laneRight - cur.cx / 3, y: dropY },
        { x: laneRight - cur.cx / 3, y: dropY },
        { x: laneRight - cur.cx / 3, y: next.cy },
        { x: next.right, y: next.cy },
      ],
      60,
    );
  }

  return pointsToRoundedPath(
    [
      { x: laneLeft + cur.cx / 2, y: cur.bottom },
      { x: laneLeft + cur.cx / 2, y: dropY },
      { x: laneLeft + cur.cx / 2, y: dropY },
      { x: laneLeft + cur.cx / 2, y: next.cy },
      { x: next.right, y: next.cy },
    ],
    60,
  );
}

type RecordCardProps = {
  record: IRecords;
  index: number;
  onLoad: () => void;
  refCallback: (el: HTMLDivElement | null) => void;
};

const RecordCard = ({
  record,
  index,
  onLoad,
  refCallback,
}: RecordCardProps) => (
  <div
    ref={refCallback}
    className={`w-[47%] rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-[#F1F5F9] ${
      index % 2 === 0 ? "self-start" : "self-end"
    }`}
  >
    {record.imageUrl && (
      <div className="w-full mb-3 overflow-hidden aspect-square rounded-xl bg-[#F8FAFC]">
        <img
          src={record.imageUrl}
          alt=""
          className="object-cover w-full h-full"
          onLoad={onLoad}
        />
      </div>
    )}
    <p className="text-[14px] w-full text-clip leading-snug text-[#475569] break-keep font-medium">
      {record.content}
    </p>
    <p className="mt-2 text-[12px] text-[#94A3B8]">{record.createdAt}</p>
  </div>
);

export const ReceivePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { encodedPresentId = "" } = useParams<{ encodedPresentId: string }>();
  const { data } = useReceivePresent(encodedPresentId);

  const records: IRecords[] = data?.selectedRecords ?? [];
  const senderName = data?.sender ?? "";
  const giftName = data?.name ?? "";

  const containerRef = useRef<HTMLDivElement>(null);
  const recordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [layout, setLayout] = useState<{
    width: number;
    height: number;
    rects: Rect[];
  }>({
    width: 0,
    height: 0,
    rects: [],
  });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rects = recordRefs.current
      .map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          left: r.left - containerRect.left,
          top: r.top - containerRect.top,
          width: r.width,
          height: r.height,
          right: r.right - containerRect.left,
          bottom: r.bottom - containerRect.top,
          cx: r.left - containerRect.left + r.width / 2,
          cy: r.top - containerRect.top + r.height / 2,
        };
      })
      .filter((r): r is Rect => r !== null);

    setLayout({
      width: containerRef.current.clientWidth,
      height: containerRef.current.scrollHeight,
      rects,
    });
  }, []);

  useLayoutEffect(measure, [records.length, measure]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const paths = useMemo(
    () =>
      layout.rects.length < 2
        ? []
        : Array.from({ length: layout.rects.length - 1 }, (_, i) =>
            buildConnectorPath(layout.rects, layout.width, i),
          ),
    [layout],
  );

  const openPresent = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <div className="h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4 pb-6">
            <img src={PresentSvg} className="w-16 h-16 mb-4" />
            <h1 className="text-[20px] font-medium leading-relaxed">
              <span className="text-main">{senderName}</span>님이 {giftName}{" "}
              선물을 보냈어요
            </h1>
            <p className="text-[14px] font-normal text-main mt-1.5">
              선물을 받으셨나요? 정성을 담은<br/> 고민의 순간을 확인해보세요
            </p>
          </div>
          <div className="fixed bottom-0 left-0 w-full h-24 bg-white">
            <div className="p-2">
              <button
                onClick={openPresent}
                className="w-full py-4 bg-[#5B89B1] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-blue-900/10"
              >
                확인하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full">
        <div className="px-6 pt-12 pb-6">
          <h1 className="text-[20px] font-medium leading-relaxed">
            <span className="text-main">{senderName}</span>님이 {giftName}{" "}
            선물을 보냈어요
          </h1>
          <p className="mt-1.5 text-[14px] font-normal text-main">
            당신의 선물을 위해 고민한 흔적이에요!
          </p>
        </div>

        <div
          className="relative w-full px-5 pb-6 overflow-x-hidden"
          ref={containerRef}
        >
          {layout.width > 0 && (
            <svg
              className="absolute inset-0 pointer-events-none"
              width={layout.width}
              height={layout.height}
            >
              {paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="1.8"
                  strokeDasharray="4 8"
                  strokeLinecap="round"
                />
              ))}
            </svg>
          )}

          <div className="relative z-10 flex flex-col gap-12">
            {records.map((record, i) => (
              <RecordCard
                key={record.id}
                record={record}
                index={i}
                onLoad={measure}
                refCallback={(el) => {
                  recordRefs.current[i] = el;
                }}
              />
            ))}
          </div>

          <div className="pt-8">
            <button className="w-full py-4 bg-[#5B89B1] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-blue-900/10">
              공유하기
            </button>
          </div>
        </div>
      </div>
    );
  }
};
