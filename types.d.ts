type Pokemon = {
  id: string;
  name: string;
  types: [
    {
      slot: string;
      type: { name: string; url: string };
    }
  ];
  stats: [
    {
      base_stat: string;
      effort: string;
      stat: { name: string; url: string };
    }
  ];
};
