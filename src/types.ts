export interface IServiceCardProps {
  alt: string;
  item: {
    title: string;
    description: string;
    src: string;
    srcLight?: string | "";
    width?: number;
    height?: number;
  };
}
