/*
 * @Author: your name
 * @Date: 2021-10-25 21:14:49
 * @LastEditTime: 2021-11-02 16:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myStudy\09react\robot-gallery\src\App.tsx
 */
import React, { Suspense, useEffect, useState } from 'react';
import logo from "./assets/svg/logo.svg";
import styles from './App.module.css';
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import ShoppingCart from "./components/ShoppingCart";


const App: React.FC = (props) => {
    let [robotData, setRobotData] = useState<any>([])
    const [count, setCount] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [list, setList] = useState([{ show: false, name: 'xm' }, { show: true, name: 'dl' }])
    // 当没有第二个参数时，模拟的是componentDidUpdated；
    // 为空数组时，模拟的是componentDidMount；
    useEffect(() => {
        const fetchData = async () => {
            setLoading(false)
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                setRobotData(data)
            } catch (err: any) {
                setError(err.message)
            }
            setLoading(true)
        }
        fetchData()
    }, [])
    // 代表，当count改变是就会触发
    useEffect(() => {
        document.title = `点击了${count}次`
        console.log(list)
    }, [count,list])
    const handleClick = () => {
        setCount(s => s + 1)
    }
    const handleChangeList = () => {
        setList(pl => {
            const cD = JSON.parse(JSON.stringify(pl)).splice(0,1)
            cD.show = !cD.show
            console.log(cD)
            return [...pl,cD]
        })
    }
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img className={styles.appLogo} src={logo} alt="logo" />
                <h1>罗伯特机器人狂拽酷炫吊炸天</h1>
            </div>
            <button onClick={
                handleClick
            }>click {count}</button>
            <button onClick={
                handleChangeList
            }>修改list</button>
            <ShoppingCart />
            <>{list.map(i => <p>{i.show ? i.name :''}</p>)}</>
            {(error || error !== '') && <div>网站出错：{error}</div>}
            {
                loading ?
                    <div className={styles.robotList}>
                        {
                            robotData.map((r, i: number) =>
                                i % 2 === 0
                                    ? <RobotDiscount key={r.id} id={r.id} name={r.name} email={r.email} />
                                    : <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
                            )
                        }
                    </div>
                    : <Suspense fallback={() => loading}></Suspense>
            }
        </div>
    );
}

// class App extends React.Component<Props, State> {
//     // 1.挂载阶段 ，初始化state,以及继承props
//     constructor(props: Props) {
//         super(props)
//         this.state = {
//             robotData: [],
//             count: 0
//         } as State
//     }
//     // 这时DOM已被创建完成，挂载DOM；全局只执行一次
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((res) => res.json())
//             .then((data) => this.setState({ robotData: data }))
//     }

//     // 2.更新阶段
//     // static getDerivedStateFromProps() { }
//     // 返回一个boolean值，true代表始终会执行更新操作
//     // shouldComponentUpdate(nextProps, nextState): boolean {
//     //     return true
//     // }
//     // 此时虚拟DOM已经更新完毕，UI被重新渲染
//     componentDidUpdate(nextProps, nextState) {
//         console.log(nextProps, nextState)
//     }

//     // 3.销毁阶段
//     // 组件被销毁，可以用来销毁事件监听器，定时器等
//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <div className={styles.app}>
//                 <div className={styles.appHeader}>
//                     <img className={styles.appLogo} src={logo} alt="logo" />
//                     <h1>罗伯特机器人狂拽酷炫吊炸天</h1>
//                 </div>
//                 <ShoppingCart />
//                 {/* setState: 异步更新，同步执行 */}
//                 <button onClick={
//                     () => {
//                         this.setState((preState, preProps) => {
//                             return { count: preState.count + 1 }
//                         }, () => {
//                             console.log(this.state.count)
//                         });
//                         this.setState((preState, preProps) => {
//                             return { count: preState.count + 1 }
//                         }, () => {
//                             console.log(this.state.count)
//                         });
//                     }
//                 }>click {this.state.count}</button>
//                 <div className={styles.robotList}>
//                     {
//                         this.state.robotData.map(r =>
//                             <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
//                         )
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

export default App;
