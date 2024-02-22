type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
};

type Ability = {
  name: string;
  is_hidden: boolean;
};

type Type = { name: string };

type Stat = {
  base_stat: string;
  stat_name: string;
};

type OriginalStat = {
  base_stat: string;
  effort: string;
  stat: { name: string; url: string };
};

type OriginalType = {
  slot: string;
  type: { name: string; url: string };
};

type OriginalAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
