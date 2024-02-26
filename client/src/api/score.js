const SCORE_API = "/api/scores";

export async function createScore(newScore) {
    const response = await fetch(`${SCORE_API}/save `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScore),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error create score");
    }
}

export async function getScores() {
    const response = await fetch(
      `${SCORE_API}/?_sort=createdAt:DESC&_limit=20`
    );
    if (response.ok) {
      const body = await response.json();
      console.log(body)
      return body;
    } else {
      throw new Error("Error fetch scores");
    }
  }