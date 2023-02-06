import "./App.css";
import Superhero from "./components/Superhero";

const superheros = [
  {
    name: "Капитан Америка",
    image: "/img/captain_america.jpg",
    text: "Стив отличается высокой маралью и непревзойденными волевыми качествами. Главной особенностью его экипировки является щит, созданный из очень редкого и прочного сплава, который не подчиняется законам физики.",
  },
  {
    name: "Человек-паук",
    image: "/img/spiderman.jpg",
    text: "Он очень ловкий, отважный и добрый. Помогает людям, борется со злом.",
  },
  {
    name: "Железный человек",
    image: "/img/ironman.jpg",
    text: "Молодой и эксцентричный наследник своего отца и огромной корпорации “Старк Индастриз”. Миллиардер и гений. ",
  },
  {
    name: "Наташа Романоф",
    image: "/img/natasha_romanof.jpg",
    text: "Профессиональный шпион, двойной агент элитного уровня.",
  },
  {
    name: "Tor",
    image: "/img/tor.jpg",
    text: "Всегда отличался смелостью и отвагой. Верным спутником Тора был его молот Мьёльнир, который сам прилетает к нему, стоит лишь Богу Грома протянуть руку.",
  },
  {
    name: "Халк",
    image: "/img/halk.jpg",
    text: "В попытках воссоздать сыворотку Капитана Америка, он превращается в огромного, неуправляемого и злого монстра зеленого цвета, который получает прозвище Халк.",
  },
];

function App() {
  return (
    <div className="App">
      {superheros.map((superhero) => (
        <Superhero
          name={superheros.name}
          image={superhero.image}
          text={superhero.text}
        ></Superhero>
      ))}
    </div>
  );
}

export default App;
