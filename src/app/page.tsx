// src/app/page.tsx
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; // Skapar denna i nästa steg

const FeatureCard = ({
  id,
  title,
  description,
  points,
  ctaText,
  ctaColor,
}: {
  id: string;
  title: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaColor?: string;
}) => (
  <Card id={id} sx={{ height: "100%" }}>
    <CardContent sx={{ p: 3 }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ color: ctaColor ? ctaColor : "text.primary", mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {description}
      </Typography>
      <List dense sx={{ listStyleType: "none", p: 0, mb: 2 }}>
        {points.map((p, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex", alignItems: "center", py: 0.5, px: 0 }}
          >
            <ListItemText
              primary={p}
              sx={{ "& .MuiListItemText-primary": { fontWeight: 500 } }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        component="a"
        href="#"
        color={ctaColor ? "secondary" : "primary"}
        sx={{
          mt: 1.5,
        }}
      >
        {ctaText}
      </Button>
    </CardContent>
  </Card>
);

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      {/* Hero Sektion */}
      <Container
        component="main"
        maxWidth="lg"
        sx={{ mt: 3, mb: 6, textAlign: "center" }}
      >
        <Box
          className="hero"
          sx={{
            position: "relative",
            background: `linear-gradient(180deg, rgba(37,99,235,0.06), rgba(37,99,235,0)), url('/studenter.jpg') center/cover no-repeat`,
            padding: { xs: "48px 16px", md: "88px 24px" },
            borderRadius: "16px",
            border: "1px solid rgba(15,23,42,0.08)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(15,23,42,0.55)",
              borderRadius: "16px",
              zIndex: 1,
            }}
          />
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: "#fff", mb: 1 }}
            >
              Sveriges digitala studentcommunity
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.05em", md: "1.2em" },
                color: "#fff",
                mb: 3.5,
                maxWidth: "820px",
                marginX: "auto",
              }}
            >
              StudentHubben samlar studenter, kårer och näringsliv. Bygg ditt
              nätverk, hitta samarbeten och ta nästa steg i karriären.
            </Typography>

            <Button
              variant="contained"
              component="a"
              href="#anmalan"
              color="primary"
              sx={{ zIndex: 2 }}
            >
              Gå med som student
            </Button>
          </Box>
        </Box>

        {/* Funktioner Sektion */}
        <Box sx={{ mt: 5 }}>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Nätverket byggt för era behov
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              mb: 5,
            }}
          >
            <FeatureCard
              id="studenter"
              title="För Studenter"
              description="Knyt värdefulla kontakter, hitta studiegrupper och få tillgång till exklusiva praktikplatser och studentjobb. Fokus på samarbete, inte bara rekrytering."
              points={[
                "Projektgrupper & plugghjälp",
                "Nätverka över campusgränserna",
                "CV-profiler och Portfolio-verktyg",
              ]}
              ctaText="Skapa Din Profil"
            />

            <FeatureCard
              id="korer"
              title="För Kårer & Föreningar"
              description="Digitalisera er kommunikation och ert engagemang. En plattform för att nå alla era medlemmar, hantera event och rekrytera nya aktiva."
              points={[
                "Eventhantering och biljettsystem",
                "Digitala mötesplatser för sektioner",
                "Ökad medlemsaktivitet och räckvidd",
              ]}
              ctaText="Läs Mer för Kårer"
              ctaColor="#4267b2"
            />

            <FeatureCard
              id="arbetsgivare"
              title="För Arbetsgivare & Aktörer"
              description="Hitta exakt rätt kompetens genom att samarbeta direkt med studenter och kårer. Sponsra event, posta riktade studentjobb och stärk ert Employer Brand."
              points={[
                "Riktade jobbannonser",
                "Samarbete med kårevent",
                "Möjlighet till mentorprogram",
              ]}
              ctaText="Partneransökan"
              ctaColor="#5cb85c"
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
