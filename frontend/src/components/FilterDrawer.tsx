import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import { FiltersProps } from "@/types/FilterTypes";
import Filters from "./Filters";

export default function FilterDrawer({ filterContent, filters, dispatch }: FiltersProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button 
        color={'secondary'} 
        onPress={onOpen}
        startContent={<ButtonIcon type={'filter'} width={20} height={20} color="#ffffff" />}
      >
        Filter Games
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={'left'}
        backdrop={'transparent'}
        isDismissable={false}
        size={"md"}
      > 
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                Choose your games
              </DrawerHeader>
              <DrawerBody>
                <Filters
                  filterContent={filterContent}
                  filters={filters}
                  dispatch={dispatch}
                />
              </DrawerBody>
              <DrawerFooter>
                <Button 
                  color="danger" 
                  variant="light" 
                  onPress={onClose}
                >
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer >
    </>
  );
}