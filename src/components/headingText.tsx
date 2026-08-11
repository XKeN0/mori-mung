import "./headingText.css";
interface HeadingTextProps {
  text: string;
}

export default function HeadingText({ text }: HeadingTextProps) {
  return (
    <h1 className="heading">{text}</h1>
  );
}