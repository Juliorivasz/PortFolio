export interface NetworkProps {
  id: number;
  name: string;
  img: {
    dark: string;
    light: string;
  };
  link: string;
  size: {
    width: string;
    height: string;
  };
}
