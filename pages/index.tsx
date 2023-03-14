import { AboutMe, Experience, Footer, Hero, Navbar, Skills } from '../components'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'stores/types'
import { sampleSlice } from 'stores'

export default function Index() {
    const sample = useSelector((state: RootState) => state.sampleStore.sample)
    const dispatch = useDispatch()
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Experience />
            <Footer />
        </>
    )
}
