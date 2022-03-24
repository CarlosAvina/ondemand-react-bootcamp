import styled from "styled-components";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

import Header from "./components/Header/Header";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  .header {
    grid-column: 1 / -1;
  }
`;

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Wrapper>
      <Header className="header" />
    </Wrapper>
  );
}

export default App;
