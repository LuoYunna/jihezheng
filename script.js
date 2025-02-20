/* 全局样式 */
body {
    background: linear-gradient(to bottom, #6FB1FC, #A0D8EF 50%, #6FB1FC);
    color: #fff;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    cursor: none;
}

@keyframes neon-glow {
    0% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff; }
    50% { text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
    100% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff; }
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

h1, h2, h3 {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    animation: neon-glow 1.5s infinite alternate, fade-in 1s ease-in-out;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
}

h1 {
    font-size: 3em;
    top: 35%;
}

/* 自定义光标效果 */
.cursor-glow {
    position: fixed;
    width: 10px;
    height: 10px;
    background: rgba(0, 255, 255, 0.8);
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.8);
    transform: translate(-50%, -50%);
    transition: transform 0.05s ease-out;
}

body:hover .cursor-glow {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 1), 0 0 50px rgba(0, 255, 255, 1);
}

/* "查看更多" 按钮样式 */
.view-more {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 40px;
    font-size: 1.5em;
    font-weight: bold;
    color: #00ffff;
    background: transparent;
    border: 2px solid #00ffff;
    cursor: pointer;
    transition: 0.3s;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
}

.view-more:hover {
    background: #00ffff;
    color: #000;
    box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff;
}

/* 导航栏样式，滚动时变透明 */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 255, 0.8);
    padding: 15px 0;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 80px;
    transition: background 0.3s ease-in-out;
}

nav.scrolled {
    background: rgba(0, 0, 255, 0.3);
}

nav .company-name-left {
    font-size: 1.5em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: none;
    margin-left: 30px;
    text-align: left;
}

nav .company-name-right {
    font-size: 1.5em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.8);
    margin-right: 30px;
    text-align: right;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 30px;
    margin: 0 auto;
}

nav a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2em;
    font-weight: bold;
    transition: 0.3s;
    text-shadow: 0 0 5px rgba(0, 0, 255, 0.5), 0 0 10px rgba(0, 0, 255, 0.5);
}

nav a:hover {
    text-decoration: underline;
    text-shadow: 0 0 15px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 1), 0 0 45px rgba(0, 255, 255, 1);
    color: #00ffff;
}

/* 调整内容布局，使其根据窗口尺寸调整 */
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 1200px;
    text-align: center;
    padding: 20px;
}
