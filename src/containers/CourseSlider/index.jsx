import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../../containers/EmblaCarouselArrowButtons/indx'
import useEmblaCarousel from 'embla-carousel-react'
import CourseCard from '../CourseCard'

const CourseSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__controls !flex justify-between">
                <div className='flex gap-4 items-center'>
                    <button className='p-3.5 border-b-2 border-black'>Most Popular</button>
                    <button className='p-3.5 border-b-2 border-transparent'>Trending</button>
                </div>
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
            <div className="embla__viewport pt-6" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <CourseCard variant="free" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CourseSlider
