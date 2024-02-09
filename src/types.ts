export interface IWorkCardProps {
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
