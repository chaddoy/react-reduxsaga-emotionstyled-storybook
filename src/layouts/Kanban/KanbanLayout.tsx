import Header from './Header';
import { KanbanLayoutProps } from './interface';
import LeftSidebar from './LeftSidebar';
import { Body, Content, KanbanLayoutWrapper } from './style';

export default function KanbanLayout({ children }: KanbanLayoutProps) {
  return (
    <KanbanLayoutWrapper>
      <Header />

      <Body>
        <LeftSidebar>Left</LeftSidebar>
        <Content>{children}</Content>
      </Body>
    </KanbanLayoutWrapper>
  );
}
