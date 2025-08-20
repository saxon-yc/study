import { useMemo, useRef, useState } from "react";

/* 获取随机颜色 */
function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",0.8)";
}
/* 获取随机位置 */
function getPostion(position: { width: number; height: number }) {
  const { width, height } = position;
  return {
    left: Math.ceil(Math.random() * width) + "px",
    top: Math.ceil(Math.random() * height) + "px",
  };
}
/* 色块组件 */
function Circle({ position }: { position: { width: number; height: number } }) {
  const style = useMemo(() => {
    //用useMemo缓存，计算出来的随机位置和色值。
    return {
      background: getColor(),
      width: "10px",
      height: "10px",
      ...getPostion(position),
    };
  }, []);
  return <div style={style} className="absolute" />;
}

export default function TimeSlice() {
  const ref = useRef<any>(null);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const box = useRef<any>(null);
  const [position, setPosition] = useState({ width: 0, height: 0 });

  const [renders, setRenders] = useState<number[]>([]);
  const originList = new Array(20000).fill(1);
  const totalTimes = Math.ceil(originList.length / 500);
  const currTimes = useRef(0);
  const timer = useRef<any>(null);

  const toRenderList = () => {
    console.log(totalTimes, currTimes.current, renders.length);
    if (currTimes.current >= totalTimes || renders.length >= 20000) {
      clearTimeout(timer.current);
      timer.current = null;
      return;
    }
    currTimes.current += 1;
    requestIdleCallback(() => {
      toRenderList();
    });
    setRenders((p) => [...p, ...new Array(500).fill(1)]);
  };
  return (
    <main className="h-lvh relative" ref={box}>
      {/* 测试 Ref */}
      <button
        ref={(node) => {
          ref.current = node;
          console.log("此时的参数是什么：", node);
        }}
        onClick={() => setCount(count + 1)}
      >
        点击{count}/
      </button>

      {/* 时间分片 */}
      <button
        onClick={() => {
          const { offsetHeight, offsetWidth } = box.current;
          setPosition({ height: offsetHeight, width: offsetWidth });
          setShow(!show);
          toRenderList();
        }}
      >
        展示
      </button>
      {show && (
        <>
          {renders.map((_, index) => (
            <Circle key={index} position={position} />
          ))}
        </>
      )}
    </main>
  );
}
