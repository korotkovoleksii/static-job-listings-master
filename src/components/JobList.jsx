import { JobPosition } from './JobPosition'
import { useSelector } from 'react-redux'
import { selectVisiblePositions } from 'store/positions/position-selection'
import { selectAllFilters } from 'store/filters/filter-selection'

const JobList = () => {
  const filters = useSelector(selectAllFilters)
  const positions = useSelector((state) =>
    selectVisiblePositions(state, filters)
  )
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList }
