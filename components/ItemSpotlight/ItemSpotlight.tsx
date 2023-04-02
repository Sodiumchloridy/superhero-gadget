interface Props {
    src: string;
  }
  
export default function ItemSpotlight({ src }: Props): JSX.Element {
    return (
      <div className="ItemSpotlight">
        <img src={src} />
      </div>
    );
  }
