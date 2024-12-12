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
# SECTION: Creating an instance of the Player class
player1 = PlayableNinja("Aragorn", 52.73, False)

# NOTE: You could do this to be verbose but its not necessary
# player1 = Player(_name = "Aragorn", _attack_power = 52.73, _has_summon = True)

#______________________________________________________________________________
# SECTION: Using methods that are part of the player class

player1.get_name()
player1.get_attack_power()
player1.summon_check()

player1.set_name("Joey")
player1.get_name()
player1.get_attack_power()

#______________________________________________________________________________
