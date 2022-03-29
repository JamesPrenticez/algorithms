// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {depths} from '../../data/depths'

export default function handler(req, res) {
  res.status(200).json({depths: depths})
}
