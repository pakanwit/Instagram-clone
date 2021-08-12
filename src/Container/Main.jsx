import styled from 'styled-components'
import Header from '../Components/Header'
import Card from '../Components/Card'

const mockData = [
  {
    "breedName": "brittany",
    "image": "https://cdn1-www.dogtime.com/assets/uploads/2011/01/file_22956_brittany-300x189.jpg",
    "description": "Brittanys were bred as gundogs, and they definitely have birds on the brain. Although they’re often called Brittany Spaniels, the American Kennel Club dropped the word “spaniel” from this pointing breed’s name in 1982.",
    "dogInfo": {
      "height": "1 foot, 5 inches to 1 foot, 8 inches tall at the shoulder",
      "weight": "30 to 40 pounds",
      "life": "10 to 13 years",
      "breedGroup": "sporting dogs"
    },
    "id": "5eaff43af96b5978ca726d21"
  },
  {
    "breedName": "american staffordshire terrier",
    "image": "https://cdn3-www.dogtime.com/assets/uploads/2018/01/american-staffordshire-terrier-dog-breed-pictures-cover-650x368.jpg",
    "description": "The American Staffordshire Terrier is a muscular breed that is known for being strong for its size, yet loving and affectionate with their human family. American Staffordshire Terriers enjoy nothing more than being with the humans they care about, whether they’re out for a jog, playing in the yard, or cuddling up on the couch.",
    "dogInfo": {
      "height": "16 to 19 inches",
      "weight": "40 to 60 pounds",
      "life": "10 to 15 years",
      "breedGroup": "terrier dogs"
    },
    "id": "5eaff43af96b5978ca726cdf"
  },
]

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgba(250,250,250,1);

`

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding-top: 84px;
  width: 100%;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 614px;
  margin: 0 auto;
`
const HeaderWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`

const MainPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentContainer>
          { mockData.map((item) => {
            return (
              <Card
                key={ item.id }
                name={ item.breedName }
                imgUrl={ item.image }
                id={ item.id }
              />
            )
          })
          }
        </ContentContainer>
      </ContentWrapper>
    </Container>
  )
}

export default MainPage
