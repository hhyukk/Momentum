const footerSpan = document.querySelector("footer span");
const quotes = [
  {
    quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
    author: "볼드윈",
  },
  {
    quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
    author: "윌리엄 제임스",
  },
  {
    quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    author: "찰리 채플린",
  },
  {
    quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
    author: "J.하비스",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "나딘 스테어",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작해라.",
    author: "P.시루스",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "칭기즈칸",
  },
  {
    quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
    author: "기시미 이치로",
  },
  {
    quote: "일단 시작해라. 나중에 완벽해지면 된다.",
    author: "론 무어",
  },
  {
    quote: "아는 것이 힘이다.",
    author: "베이컨",
  },
];

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
footerSpan.innerText = todaysQuote.quote;
