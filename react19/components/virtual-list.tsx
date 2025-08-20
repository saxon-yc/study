import { useState, useRef, useEffect } from "react";

export default function VirtualList() {
  const [dataList, setDataList] = useState<number[]>([]); /* 保存数据源 */
  const [position, setPosition] = useState([
    0, 0,
  ]); /* 截取缓冲区 + 视图区索引 */
  const scroll = useRef<any>({}); /* 获取scroll元素 */
  const box = useRef<any>(null); /* 获取元素用于容器高度 */
  const context = useRef<any>(null); /* 用于移动视图区域，形成滑动效果。 */
  const scrollInfo = useRef({
    height: 500 /* 容器高度 */,
    bufferCount: 8 /* 缓冲区个数 */,
    itemHeight: 60 /* 每一个item高度 */,
    renderCount: 0 /* 渲染区个数 */,
  });
  useEffect(() => {
    const height = box.current.offsetHeight;
    const { itemHeight, bufferCount } = scrollInfo.current;
    const renderCount = Math.ceil(height / itemHeight) + bufferCount;
    scrollInfo.current = { renderCount, height, bufferCount, itemHeight };
    const dataList = new Array(10000).fill(1).map((item, index) => index + 1);
    setDataList(dataList);
    setPosition([0, renderCount]);
  }, []);
  const handleScroll = () => {
    const { scrollTop } = scroll.current;
    const { itemHeight, renderCount } = scrollInfo.current;
    const currentOffset = scrollTop - (scrollTop % itemHeight);
    const start = Math.floor(scrollTop / itemHeight);
    console.log({ scrollTop, itemHeight });
    context.current.style.transform = `translate3d(0, ${currentOffset}px, 0)`; /* 偏移，造成下滑效果 */
    const end = Math.floor(scrollTop / itemHeight + renderCount + 1);
    if (end !== position[1] || start !== position[0]) {
      /* 如果render内容发生改变，那么截取  */
      setPosition([start, end]);
    }
  };
  const { itemHeight, height } = scrollInfo.current;
  const [start, end] = position;
  const renderList = dataList.slice(start, end); /* 渲染区间 */
  console.log("渲染区间", position);
  return (
    <>
      <h1>Virtual List</h1>
      <div className="flex justify-center text-center" ref={box}>
        <section
          ref={scroll}
          className=" w-md overflow-hidden border-amber-200 border-2 p-2.5 overflow-y-scroll"
          style={{ height: `${height}px` }}
          onScroll={handleScroll}
        >
          <ul ref={context}>
            {renderList.map((i) => (
              <li
                key={i}
                className="bg-amber-100 mb-2 p-2"
                style={{ height: `${itemHeight}` }}
              >
                {i}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
