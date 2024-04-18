import React, { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import { TextButton } from './CatalogPageStyle';
import CardItem from 'components/CardItem/CardItem';
import { Container } from './CatalogPageStyle';



const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdverts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://66200f433bf790e070aee2ba.mockapi.io/Catalog`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAdverts(prevAdverts => [...prevAdverts, ...data]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      
        {adverts.map(advert => (
          <Container key={advert._id} className="advert">
            <CardItem advert={advert} />
          </Container>
        ))}
  
      <Button type="button" onClick={loadMore}>
        <TextButton>Load more</TextButton>
      </Button>
    </>
  );
   
};


export default CatalogPage;
