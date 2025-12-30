import { useEffect, useState } from "react";

type Activity = {
  id: string;
  name: string;
  details?: string;
  state?: string;
  type: number;
};

const DISCORD_ID = "1408081539249733764";

const WhatIsTazDoing = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
      .then((res) => res.json())
      .then((data) => {
        const acts = (data?.data?.activities ?? []).filter(
          (a: Activity) => a.type !== 4
        );

        setActivities(acts.slice(0, 2));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full flex justify-center mt-12 animate-fade-in">
      <div className="max-w-xl w-full px-4 text-center">
        <h2 className="text-lg font-semibold text-ctp-text mb-4 animate-fade-in">
          what is taz doing?
        </h2>

        {loading && (
          <p className="text-ctp-muted animate-fade-in">
            fetching activity…
          </p>
        )}

        {!loading && activities.length === 0 && (
          <p className="text-ctp-muted animate-fade-in">
            currently offline or idle
          </p>
        )}

        <div className="grid gap-3">
          {!loading &&
            activities.map((activity) => (
              <div
                key={activity.id}
                className="rounded-xl border border-ctp-muted bg-ctp-base/60 p-4 backdrop-blur hover-scale animate-fade-in"
              >
                <p className="font-medium text-ctp-teal animate-fade-in">
                  {activity.name}
                </p>

                {activity.details && (
                  <p className="text-sm text-ctp-text mt-1 animate-fade-in">
                    {activity.details}
                  </p>
                )}

                {activity.state && (
                  <p className="text-xs text-ctp-muted mt-1 animate-fade-in">
                    {activity.state}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsTazDoing;
