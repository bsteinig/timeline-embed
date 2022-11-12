import React, { useState, useEffect} from 'react';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import TimelineComponent from './Timeline';

export default function App({ domElement }) {

  // const [data, setData] = useState();
  // const [raw, setRaw] = useState();

  // let path = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQPkBN3iQSiC0WgZoGjfIq00RRHqeou8a5aLfkZv8tPCpBhAwEkmIQ9EjSMkmy-66BXBTRMiPdS2niP/pub?output=csv`;

  // const generateJson = async () => {
    
  //   try {
  //     let parsed = new URL(path)
  //     let params = new URLSearchParams(parsed.search)
  //     params.set('output', 'csv')
  //     if (params.get('gid')) {
  //         params.set('single', 'true')
  //     }
  //     parsed.search = `?${params.toString()}`
  //     let base_path = parsed.pathname.substr(0, parsed.pathname.lastIndexOf('/'))
  //     parsed.pathname = `${base_path}/pub`
  //     // return parsed.toString()
  //     console.log(`https://cat-fact.herokuapp.com/`+parsed.toString())
  //     let d = await fetch(parsed.toString());
  //     console.log(d);
  //     setData(d);
  //     const blob = new Blob([JSON.stringify(d)], {
  //       type: 'application/json'
  //     });
  //     console.log(blob);
  //     setRaw(blob)
  //   } catch (error) {
  //     console.log(error)
  //     setData(null);

  //   }
  // }

  // useEffect (() => {
  //   generateJson();
  // }, [])

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <TimelineComponent />
    </MantineProvider>
  );
}
