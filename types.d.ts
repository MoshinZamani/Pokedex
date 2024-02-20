type Pokemon = {
  abilities: Ability[];
  id: string;
  name: string;
  height: number;
  weight: number;
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

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Stat = {
  base_stat: string;
  effort: string;
  stat: { name: string; url: string };
};
