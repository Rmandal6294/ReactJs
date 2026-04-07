import CardInfo from "./CardInfo"

const RightSection = () => {
  const projectShowcase = [
    {
      img: "https://i.pinimg.com/736x/61/b9/94/61b994e93fe4c60a9d699b290e46c658.jpg",
      description: "Harnessing deep learning to predict market shifts with surgical precision and real-time accuracy.",
      button: "Satisfied",
      buttonColor: "bg-blue-400",
      num: 1
    },
    {
      img: "https://i.pinimg.com/736x/70/4a/09/704a09c0a8eef1407f96802a9ddb39d5.jpg",
      description: "A minimalist interface designed to reduce cognitive load and significantly boost daily user productivity.",
      button: "Undeserved",
      buttonColor: "bg-lime-400",
      num: 2
    },
    {
      img: "https://i.pinimg.com/1200x/21/93/8b/21938bb49e4d3b52e6352430f82e1273.jpg",
      description: "Proactive threat detection ensuring your data remains impenetrable in an increasingly volatile digital landscape.",
      button: "Satisfied",
      buttonColor: "bg-blue-400",
      num: 3
    },
    {
      img: "https://i.pinimg.com/736x/10/04/44/100444bc1f05a2fe7b0bca71665ef06c.jpg",
      description: "Eco-conscious algorithms optimizing energy consumption for greener, more sustainable global data centers.",
      button: "Exceeded",
      buttonColor: "bg-lime-400",
      num: 4
    },
    {
      img: "https://i.pinimg.com/736x/ce/49/36/ce4936ea9fd1190607a0481df1016658.jpg",
      description: "Harnessing deep learning to predict market shifts with surgical precision and real-time accuracy.",
      button: "Satisfied",
      buttonColor: "bg-blue-400",
      num: 5
    }
    
  ];
  return (
    <div className="w-2/3 h-full flex items-center flex-nowrap gap-4 overflow-x-scroll scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {projectShowcase.map((project, index) => (
        <CardInfo key={index} img={project.img} description={project.description} button={project.button} buttonColor={project.buttonColor} num={project.num} />
      ))}
    </div>
  )
}

export default RightSection
