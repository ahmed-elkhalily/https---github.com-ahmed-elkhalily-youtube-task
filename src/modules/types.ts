export interface NavbarProps {
  setData: React.Dispatch<React.SetStateAction<object>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MainProps {
  isLoading: boolean;
  data: DataProps;
}

export interface DataProps {
  pageInfo?: {
    totalResults: number;
  };
  items?: Array<Item>;
}

interface Item {
  id: { videoId?: string; channelId?: string };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle: string;
  };
}
