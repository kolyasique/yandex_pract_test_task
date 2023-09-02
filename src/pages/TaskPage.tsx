import Header from './components/Header'
import Footer from './components/Footer'
import TaskModule from '../modules/TaskModule/TaskModule'

type Props = {}

export default function TaskPage({}: Props) {
  return (
    <>
    <Header />
        <TaskModule/>
    <Footer />
    </>
  )
}