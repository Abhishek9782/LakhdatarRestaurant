import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { all } from "axios";

export const Ourspecial = () => {
  const OurSpecialParent = styled.div`
    height: max-content;
    color: red;
    display: flex;
    justify-content: center;
  `;
  const Container = styled.div`
    color: white;
    background-color: white;
    height: auto;
    width: 100%;
    max-width: 1224px;
    margin-top: 82px;
  `;
  const DishSweet = styled.div`
    display: flex;
    background-color: #9999997d;
    flex-direction: column;
    border-bottom: 1px solid black;
  `;
  const OurSpecialHead = styled.h3`
    color: black;
    margin: 2rem 0rem;
    font-family: "Kanit";
    margin-left: 2em;
  `;
  const OurSpecialList = styled.div`
    height: auto;
    overflow-x: hidden;
  `;
  const ListUl = styled.ul`
    display: flex;
  `;
  const Listli = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    cursor: pointer;
  `;

  const ListImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
  `;

  const Listspan = styled.span`
    text-align: center;
    position: relative;
    bottom: 30px;
    font-size: 20px;
    margin-top: 30px;
    font-family: sans-serif;
    color: black;
  `;

  const OurSpecial = styled.div`
    margin: 2em 0em;
  `;

  const SpecialHead = styled.span`
    color: black;
    font-size: 18px;
    margin: 1em 0 1em 2em;
    font-size: 23px;
    font-family: "Kanit";
  `;

  const SpecialHeadList = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 30px;
    column-gap: 10px;
  `;

  const SpecialItem = styled.div`
    width: 300px;
    height: 370px;
    position: relative;
    box-shadow: 1px 1px 10px #99999961;
    cursor: pointer;
  `;

  const SpecialImage = styled.img`
    width: 300px;
    height: 232px;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.9;
  `;

  const Offer = styled.h3`
    color: white;
    position: absolute;
    top: 12rem;
    left: 1rem;
    font-size: 24px;
  `;

  const BottomDetails = styled.div``;
  const Dishname = styled.h4`
    color: black;
    font-size: 18px;
    font-family: "kanit";
    margin: 10px 20px 0px 20px;
  `;

  const DishRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 20px;
  `;

  const DishRatingImg = styled.img`
    width: 20px;
  `;

  const DishRatingText = styled.span`
    color: black;
    font-size: 16px;
    font-family: "kanit";
    margin: 0px 10px;
  `;

  const DishRatingText2 = styled.span`
    color: black;
    font-family: "Raleway", sans-serif;
    position: absolute;
    bottom: 10px;
    font-size: 12px;
    line-height: 12px;
    padding-right: 10px;
    margin-top: 10px;
  `;

  // State
  const [allFood, setAllFood] = useState([]);
  console.log(allFood);

  const FetchAllProduct = async () => {
    const res = await axios.get("http://localhost:5000/food").catch((error) => {
      console.log(error);
    });
    if (res.data) {
      setAllFood(res.data);
    }
  };

  useEffect(() => {
    FetchAllProduct();
  }, []);

  return (
    <>
      <OurSpecialParent>
        <Container>
          <DishSweet>
            <OurSpecialHead>What's on Your mind ?</OurSpecialHead>
            <OurSpecialList>
              <ListUl>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35972.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>South Indian</Listspan>
                </Listli>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/free-photo/side-close-up-view-cabbage-with-carrots-carrots-cabbage-plate-fork_140725-71335.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>Fried Rice</Listspan>
                </Listli>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>Paneer Special</Listspan>
                </Listli>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/premium-photo/finger-millet-ora-a-ragi-dosaa-a-is-healthy-indian-breakfast-served-with-chutney-roll-flat-cone-shape_466689-50486.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>Dosa</Listspan>
                </Listli>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/premium-photo/indian-flatbread-called-laccha-paratha-made-up-layers-using-wheat-flour-maida_466689-52234.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>Paratha</Listspan>
                </Listli>
                <Listli>
                  <ListImg
                    src="https://img.freepik.com/free-photo/top-view-composition-different-pakistan-goodies_23-2148821564.jpg?ga=GA1.1.1046556778.1729127904&semt=ais_hybrid"
                    alt="img not found"
                  />
                  <Listspan>Rajasthani</Listspan>
                </Listli>
              </ListUl>
            </OurSpecialList>
          </DishSweet>
          <OurSpecial>
            <SpecialHead>Our Special for our Customers</SpecialHead>
            <SpecialHeadList>
              {allFood.map((data) => (
                <SpecialItem>
                  <SpecialImage src={data.src} alt="image not found " />
                  <Offer>50% off On 250 </Offer>
                  <BottomDetails>
                    <Dishname>{data.name}</Dishname>
                    <DishRating>
                      <DishRatingImg
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEeHCabBg7CalQnUtKyGvlbSrLAZgJDbtVg&s"
                        alt=""
                      />

                      <DishRatingText> 4.1 & 20-25 mins </DishRatingText>
                      <DishRatingText2>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quam error voluptas, non doloribus, amet
                        asperiores nemo illo quaerat voluptates saepe debitis
                        nihil vitae. Assumenda eaque animi perspiciatis eius ea
                        placeat!
                      </DishRatingText2>
                    </DishRating>
                  </BottomDetails>
                </SpecialItem>
              ))}
            </SpecialHeadList>
          </OurSpecial>
        </Container>
      </OurSpecialParent>
    </>
  );
};