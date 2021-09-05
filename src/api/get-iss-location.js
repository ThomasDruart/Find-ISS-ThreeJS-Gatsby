import axios from "axios";

const handler = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    res.status(200).json({ iss_now: data });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default handler;
