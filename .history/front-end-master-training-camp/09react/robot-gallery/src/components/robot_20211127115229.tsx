/*
 * @Author: your name
 * @Date: 2021-10-25 22:06:12
 * @LastEditTime: 2021-11-02 16:44:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myStudy\09react\robot-gallery\src\components\robot.tsx
 */
import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { withAddToCart, robotProps } from "./withAddToCart";
//  React.FC functional组件
const Robot: React.FC<robotProps> = ({ id, name, email, addToCart }) => {
    const value = useContext(appContext)
    return <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="" />
        <p>{name}</p>
        <p>{email}</p>
        <p>作者：{value.username}</p>
        <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
}
export default withAddToCart(Robot)