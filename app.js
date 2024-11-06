import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'


const gf = new GiphyFetch(vZgfW0vjYSFqqEH2BX01rqExIjHi5buQ)


const fetchGifs = (offset: Number) => gf.trending({ offset, limit: 10 })


ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)
