import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";

const SpiderCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    const { sin, cos, PI, hypot, min, max, random } = Math;

    function many(n, f) {
      return [...Array(n)].map((_, i) => f(i));
    }

    function rnd(x = 1, dx = 0) {
      return random() * x + dx;
    }

    function lerp(start, end, t) {
      return start + (end - start) * t;
    }

    function drawCircle(x, y, r, color = "white") {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, PI * 2);
      ctx.fill();
    }

    function drawLine(x0, y0, x1, y1) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }

    function spawn() {
      const pts = many(333, () => ({ x: rnd(innerWidth), y: rnd(innerHeight), len: 0, r: 0 }));
      const pts2 = many(9, (i) => ({ x: cos((i / 9) * PI * 2), y: sin((i / 9) * PI * 2) }));
      
      let seed = rnd(100);
      let tx = rnd(innerWidth);
      let ty = rnd(innerHeight * 0.5);
      let x = rnd(innerWidth);
      let y = rnd(innerHeight * 0.5);
      let kx = rnd(0.8, 0.8);
      let ky = rnd(0.8, 0.8);
      let walkRadius = { x: rnd(50, 50), y: rnd(50, 50) };
      let r = innerWidth / rnd(100, 150);

      function paintPt(pt) {
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          drawLine(
            x + pt2.x * r,
            y + pt2.y * r,
            lerp(x + pt2.x * r, pt.x, pt.len * pt.len),
            lerp(y + pt2.y * r, pt.y, pt.len * pt.len)
          );
        });
        drawCircle(pt.x, pt.y, pt.r);
      }

      return {
        follow(mouseX, mouseY) {
          tx = mouseX;
          ty = mouseY;
        },
        tick(t) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x;
          const selfMoveY = sin(t * ky + seed) * walkRadius.y;
          let fx = tx + selfMoveX;
          let fy = ty + selfMoveY;
          
          x += min(innerWidth / 100, (fx - x) / 10);
          y += min(innerWidth / 100, (fy - y) / 10);

          pts.forEach((pt) => {
            const dx = pt.x - x, dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, innerWidth / len / 5);
            pt.len = max(0, min(pt.len + (len < innerWidth / 10 ? 0.1 : -0.1), 1));
            pt.r = r;
            paintPt(pt);
          });
        }
      };
    }

    const spiders = many(2, spawn);

    function animate(t) {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 0.75; // Increased height by 25%
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = ctx.strokeStyle = "white";
      t /= 1000;
      spiders.forEach(spider => spider.tick(t));
      requestAnimationFrame(animate);
    }

    // Fix the event listener handling
    const handlePointerMove = (e) => {
      spiders.forEach(spider => spider.follow(e.clientX, e.clientY));
    };

    addEventListener("pointermove", handlePointerMove);

    requestAnimationFrame(animate);

    return () => {
      removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[52vh] overflow-hidden bg-black relative top-0 left-0 z-10 border-4 border-gray-500 shadow-2xl shadow-gray-900 hover:border-gray-600 transition-all ease-in-out duration-300">
        <div 
          className="relative w-full text-center top-5 text-white text-4xl tracking-wider flex justify-center" 
          style={{ 
            fontFamily: "'Black Ops One', system-ui",
            textShadow: '3px 3px 0px rgba(255,0,0,0.5), -1px -1px 0px rgba(0,0,0,0.7)'
          }}
        >
          <div>MOVE CURSOR</div>
          <div className="text-slate-600 animate-bounce font-mono shadow-lg shadow-inherit text-center mt-1 ml-5">
            ↓{" "}
          </div>
        </div>
        <canvas ref={canvasRef} className="w-full h-[55vh] block" />
      </div>
      <div className="absolute bottom-60 left-[298px] rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_25px_rgba(255,255,255,0.6)]">
        <img
          src={profile}
          alt="profile picture"
          className="w-[210px] h-[210px] rounded-full object-cover border-[3px] border-[#0d1117]"
        />
      </div>
    </>
  );
};

export default SpiderCanvas;