# NOTE: This is the Parent class (also called the Super or Base Class) 

class PlayableNinja:

    def __init__(self, _name: str, _attack_power: float, _has_summon: bool):
        self.name: str = _name
        self.attack_power: float = _attack_power
        self.has_summon: bool = _has_summon

    # getter methods
    def get_name(self) -> None:
        print(f"The player's name is: {self.name}")

    def get_attack_power(self) -> None:
        print(f"{self.name}'s attack_power is {self.attack_power}")

    def summon_check(self) -> None:
        if self.has_summon == True:
            print(f"{self.name} has a summon")
        else:
            print(f"{self.name} does not have a summon yet")

    # setter methods
    def set_name(self, _new_name: str) -> None:
        self.name = _new_name

#______________________________________________________________________________

# NOTE: This is the Child class (also called the Sub or Derived Class) 

class PlayableMage(PlayableNinja):
    def __init__(self, _name: str, _attack_power: float, _has_summon: bool, _domain_expansion: str):
        # How to modify the initializer method
        super().__init__(_name, _attack_power, _has_summon)
        self.domain_expansion: str = _domain_expansion

    # Example method for PlayableMage
    def get_domain_expansion(self) -> None:
        print(f"{self.name}'s domain expansion is {self.domain_expansion}")

player_two: PlayableMage = PlayableMage("Kenny", 78.2, True, "Infinity")

player_two.get_name()  # The player's name is: Kenny
player_two.get_attack_power()  # Kenny's attack power is 78.2
player_two.summon_check()  # Kenny has a summon
player_two.get_domain_expansion()  # Kenny's domain expansion is Infinity
