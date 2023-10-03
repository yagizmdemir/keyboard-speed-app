import { createSlice } from "@reduxjs/toolkit";
import words from '../../data/words.json';

const wordCount = 50;

const getRandomWords = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    const newWords = shuffled.slice(0, num);
    return newWords;
};

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        words: getRandomWords(words, wordCount),
        counter: 60,
        isStart: false,
        activeIndex: 0,
        corrects: 0,
        incorrects: 0,
        totalHit: 0,
        finished: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        start: (state) => {
            state.isStart = true;
            state.words[state.activeIndex].status = 'active';
        },
        finish: (state) => {
            state.finished = true;
        },
        timeDecrement: (state) => {
            state.counter -= 1
        },
        handleChange: (state) => {
            state.totalHit += 1;
        },
        next: (state, action) => {

            if (state.words[state.activeIndex].word.toLowerCase() === action.payload.text.trim().toLowerCase()) {
                state.words[state.activeIndex].status = 'correct';
                state.corrects += 1;
            } else {
                state.words[state.activeIndex].status = 'incorrect';
                state.incorrects += 1;
            }

            if (state.words[state.activeIndex + 1]) {
                state.activeIndex += 1;
                state.words[state.activeIndex].status = 'active';
            }

        },
        restartWords: (state) => {
            state.words = getRandomWords(words, wordCount);
            state.counter = 60;
            state.isStart = false;
            state.finished = false;
            state.activeIndex = 0;
            state.corrects = 0;
            state.incorrects = 0;
            state.totalHit = 0;
        }
    }
})


// Constant variables
export const type = (state) => state.type.words;
export const counter = (state) => state.type.counter;

// Export reducers
export const { restartWords, start, next, timeDecrement, handleChange, finish } = typeSlice.actions;
export default typeSlice.reducer;