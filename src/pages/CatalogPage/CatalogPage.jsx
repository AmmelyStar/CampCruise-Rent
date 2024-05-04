/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ButtonMore from 'components/Button/ButtonMore';
import { TextButton } from './CatalogPageStyle';
import CardItem from '../../components/CardItem/CardItem';

import { Container, Wrapper, Wrap, Cont, Card } from './CatalogPageStyle';
import Aside from 'components/Aside/Aside';
import { Loader } from 'components/Loader/Loader';

const PAGE_SIZE = 4;

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]); 

  const fetchAdverts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://66200f433bf790e070aee2ba.mockapi.io/Catalog?page=${page}&limit=${PAGE_SIZE}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAdverts(prevAdverts =>
        page === 1 ? [...data] : [...prevAdverts, ...data]
      );

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdverts();
  }, [page]);

  useEffect(() => {
    const fetchAllCities = async () => {
      try {
        const response = await fetch(
          'https://66200f433bf790e070aee2ba.mockapi.io/Catalog'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        const uniqueCities = [...new Set(data.map(advert => advert.location))];
        setAllCities(uniqueCities);
      } catch (error) {
        console.error('Error while fetching cities:', error);
      }
    };

    fetchAllCities();
  }, []);

  useEffect(() => {
    setCities(allCities); 
  }, [allCities]);

  const loadMore = () => {
    setPage(page + 1);
  };

 const handleCityChange = async city => {
  if (city) {
    setPage(1); 
    try {
      const response = await fetch(
        `https://66200f433bf790e070aee2ba.mockapi.io/Catalog?page=1&limit=${PAGE_SIZE}&location=${city}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAdverts(data);
      setLoading(false);
      setHasMore(false); 
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  } else {
    setPage(1); 
    fetchAdverts(); 
    setHasMore(true); 
  }
};

  if (loading && page === 1) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Wrapper>
        <Cont>
          <Aside cities={cities} onCityChange={handleCityChange} />
        </Cont>
        <Card>
          {adverts.map(advert => (
            <Container key={advert._id} className="advert">
              <CardItem advert={advert} />
            </Container>
          ))}
          {hasMore && (
            <Wrap>
              <ButtonMore type="button" onClick={loadMore}>
                <TextButton>Load more</TextButton>
              </ButtonMore>
            </Wrap>
          )}
        </Card>
      </Wrapper>
    </>
  );
};

export default CatalogPage;
