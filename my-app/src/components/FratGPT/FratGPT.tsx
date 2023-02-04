import React, { useState } from "react";
import axios from "axios";

const API_KEY = "<API_KEY>";
const API_ENDPOINT = "https://api.openai.com/v1/completions";

interface RequestData {
  model: string;
  prompt: string;
  max_tokens: number;
}

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "cards", label: "Cards" },
  { value: "dice", label: "Dice" },
  { value: "solo cups", label: "Solo Cups" },
];

const sendRequest = async (
  data: RequestData,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await axios.post(API_ENDPOINT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setLoading(false);
    return response.data.choices[0].text;
  } catch (error) {
    setLoading(false);
    console.error(error);
  }
};

interface Game {
  instructions: string;
}

interface InputFormProps {
  setGame: (game: string) => void;
  setLoading: (loading: boolean) => void;
}

const generatePrompt = (people: number, alcohol: string, supplies: string) => {
  return `Create an original drinking game for ${people} people using ${alcohol} and $${supplies}. The game should be exciting and act as a way to break the ice among new friends. Explain the game as if you are already drunk.`;
};

const InputForm: React.FC<InputFormProps> = ({ setGame, setLoading }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [alcoholType, setAlcoholType] = useState("");
  const [supplies, setSupplies] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prompt = generatePrompt(numberOfPeople, alcoholType, supplies);
    console.log(prompt);
    const response = await sendRequest(
      { model: "text-davinci-003", prompt, max_tokens: 1000 },
      setLoading
    );
    console.log(response);

    const gameData = response;
    console.log(gameData);
    setGame(gameData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of People:
        <input
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.valueAsNumber)}
        />
      </label>
      <br />
      <label>
        Type of Alcohol:
        <input
          type="text"
          value={alcoholType}
          onChange={(e) => setAlcoholType(e.target.value)}
        />
      </label>
      <br />
      <label>
        Supplies:
        <select value={supplies} onChange={(e) => setSupplies(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Generate Game</button>
    </form>
  );
};

const GameDisplay: React.FC<Game> = (props) => {
  return (
    <div>
      <h3>Instructions:</h3>
      <p>{props.instructions}</p>
    </div>
  );
};

const FratGPT: React.FC = () => {
  const [game, setGame] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <InputForm setGame={setGame} setLoading={setLoading} />
      {game && !loading && <GameDisplay instructions={game} />}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default FratGPT;
