import React from 'react';
import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Main from '../components/Main';
import Text from '../components/Text';
import Title from '../components/Title'

export default function Home() {
  const [totalRows, setTotalRows] = React.useState(0)
  const [stitch, setStitch] = React.useState(0)
  const [totalStitches, setTotalStitches] = React.useState(0)

  function getValue(){
    let rowTotal = stitch * 2 
    let total = rowTotal + stitch
    let currentRow = 3 

    for(let i = 0; i < totalRows - 1; i++){  // career - 1 for the first two careers are already counted
        rowTotal = stitch * currentRow
        currentRow += 1
        total += rowTotal
    }
    total += rowTotal // adds the slip stitches row
    setTotalStitches(total)
  }

  return (
    <>
    <Main>
      <Title>Stitch counter</Title>
      <Text>This project is a stitch counter for round crochet projects</Text>

      <Label htmlFor='total_rows'>Please inform the number of rows:</Label>
      <Input type='number' name='total_rows' onChange={
        (event) =>{
          setTotalRows(event.target.value)
          console.log(typeof careerNumber)
        }
      }/>

      <Label htmlFor='initial_stitches'>Please inform the number of stitches in the first row:</Label>
      <Input type='number' name='initial_stitches' onChange={
        (event) =>{
          setStitch(Number(event.target.value))
        }
      }/>

      <Button 
        onClick={() => {
          getValue()
      }}>Calculate</Button>

      <p>The total stitches for the project is: </p>
      <output htmlFor='career_number stitches' name='result'>{totalStitches}</output>
    </Main>
    </>
  )
}
