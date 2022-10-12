import { createBrowserRouter } from "react-router-dom";
import Main from "./Main"
import ErrorElement from "../components/ErrorElement"
import Home from "../components/Home"
import QuizItem from "../components/QuizItem"
import Puzzle from "../components/Puzzle"
import PuzzleStatics from "../components/PuzzleStatics"
import Blog from "../components/Blog"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        loader:async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement:<ErrorElement></ErrorElement>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'/puzzle',
                element:<QuizItem></QuizItem>
            },
            {
                path:'/puzzle/:quizId',
                loader: async ({params}) =>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element:<Puzzle></Puzzle>
            },
            {
                path:'puzzleStatic',
                element:<PuzzleStatics></PuzzleStatics>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    },
])