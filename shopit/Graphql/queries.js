import { gql } from '@apollo/client';

export const categoryquery = gql`
  query {
    categories {
      data {
        attributes {
          cid
          cslug
          cname
          cimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const productsquery = gql`
  query {
    products {
      data {
        attributes {
          pid
          pname
          price
          pslug
          pimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const productslug = gql`
  query {
    products {
      data {
        attributes {
          pslug
        }
      }
    }
  }
`;

export const categoryslug = gql`
  query {
    categories {
      data {
        attributes {
          cslug
        }
      }
    }
  }
`;

export function getProductbySlug(slug) {
  return gql`
    query {
      products(
        filters: { pslug: { eq: "${slug}" } }
      ) {
        data {
          attributes {
            pid
            pname
            price
            pslug
            pdescription
            pimage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
}

export function getCategorybySlug(slug) {
  return gql`
    query {
      categories(filters: { cslug: { eq: "${slug}" } }) {
        data {
          attributes {
            cid
            cslug
            products {
              data {
                attributes {
                  pid
                  pname
                  price
                  pslug
                  pimage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
