import {  useState } from 'react';



import { TextButton } from './CatalogPageStyle';
import Button from 'components/Button/Button';

function CatalogPage() {
  const [page, setPage] = useState(1);
  

  

  const loadMore = () => {
    setPage(page + 1);
  };

 
  return (
    <>
    
       
          <Button type="button" onClick={loadMore}>
            <TextButton>Load more</TextButton>
          </Button>


    </>
  );
}

export default CatalogPage;
