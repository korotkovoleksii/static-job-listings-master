import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllFilters } from 'store/filters/filter-selection'
import { removeFilter, clearFilter } from 'store/filters/filter-action'

const FilterPanel = () => {
  const filters = useSelector(selectAllFilters)
  const dispatch = useDispatch()

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((item) => (
            <Badge
              key={item}
              variant="clearable"
              onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
