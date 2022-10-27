import PortCodes from '../../src/data/PortCodes';

export default function handler(req, res) {
  res.status(200).json(PortCodes);
}
