import { Container } from '@mantine/core'
import React from 'react'
import Event from './Event'
import { mockdata } from './sample'


function TimelineComponent() {

  const events = mockdata["events"].map ((event) => 
    <Event event={event} />
  )

  return (
    <Container size="xl">
        {events}
    </Container>
  )
}

export default TimelineComponent