import { Header } from "./Typography";

interface Props {
  text: string;
  accentColor: string;
  backgroundColor: string;
  illustration: string;
}

export function Banner(props: Props) {
  const { text } = props;

  return (
    <Header variant="xl" renderAs="h1" className="my-0">
      {text}
    </Header>
  );
}
