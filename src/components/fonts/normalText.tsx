import "./normalText.css";
interface NormalTextProps {
  text: string;
}

export default function NormalText({ text }: NormalTextProps) {
  return (
    <p className="normal">{text}</p>
  );
}