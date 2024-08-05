"use client"
import Image from "next/image";
import Menu from "./cpmponents/Menu";
import { useEffect, useRef, useState } from "react";


export default function Home() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing,setIsDrawing] = useState(false);
    const [lineColor,setLineColor] = useState("black");
    const [lineWidth,setLineWidth] = useState(5);
    const [lineOpacity,setLineOpacity] = useState(0.1);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineWidth;
        ctxRef.current = ctx;
    },[lineColor.lineOpacity,lineWidth]);

    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
    };
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };
    const draw = (e) =>{
        if(!isDrawing){
            return;
        }
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        ctxRef.current.stroke();
    }

  return (
    <>
    <div class="drawArea w-[1280px] h-[720px]">
         <Menu setLineColor={setLineColor} setLineWidth={setLineWidth} setLineOpacity={setLineOpacity}/>

         <canvas onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} ref={canvasRef} width={`1280px`} height={`720px`}  />

    </div>

    </>
);
}
