import React, { useState, useEffect } from 'react';
import ButtonMore from 'components/Button/ButtonMore';
import { TextButton } from './CatalogPageStyle';
import CardItem from '../../components/CardItem/CardItem';

import { Container, Wrapper, Wrap, Cont } from './CatalogPageStyle';
import Aside from 'components/Aside/Aside';
import { Loader } from 'components/Loader/Loader';

const PAGE_SIZE = 4;

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
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

        // Check if there are more adverts to load
        setHasMore(data.length === PAGE_SIZE);

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
          <Aside />
        </Cont>
        <div>
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
        </div>
      </Wrapper>
    </>
  );
};

export default CatalogPage;
